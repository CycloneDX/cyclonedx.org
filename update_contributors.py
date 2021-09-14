#!/usr/bin/env python3
import json
import os
import urllib.request


def get_repos():
    token = os.environ.get('GITHUB_TOKEN', None)
    request = urllib.request.Request('https://api.github.com/users/CycloneDX/repos')
    if token is not None:
        request.add_header('Authorization', 'token ' + token)
    with urllib.request.urlopen(request) as resource:
        return json.load(resource)


def get_repo_contributors(url):
    token = os.environ.get('GITHUB_TOKEN', None)
    request = urllib.request.Request(url)
    if token is not None:
        request.add_header('Authorization', 'token ' + token)
    with urllib.request.urlopen(request) as resource:
        return json.load(resource)


def get_cyclonedx_contributors():
    contributors = {}
    print('Fetching repos for: CycloneDX', end=' ')
    repos = get_repos()
    print(len(repos), 'repos.')
    print()
    for repo in repos:
        print('Fetching contributors for:', repo['name'], end=' ')
        repo_contributors = get_repo_contributors(repo['contributors_url'])
        print(len(repo_contributors), 'contributors.')
        for contributor in repo_contributors:
            # for some reason the actions-user is reported as a normal user
            if contributor['type'].lower() != 'bot' and contributor['login'] != 'actions-user':
                contributors[contributor['login']] = {
                    'github': contributor['login'],
                    'headshot': contributor['avatar_url'],
                    'homepage': contributor['html_url'],
                }
    print()
    print(len(contributors), 'total contributors')
    return contributors


def get_working_group_members():
    with open('about/working-groups/working-groups.json', 'rt') as f:
        return json.load(f)


def remove_working_group_members_from_contributors(members, contributors):
    for member in members:
        try:
            del contributors[member['github']]
        except KeyError:
            pass


def add_new_contributors(members, contributors):
    for contributor in contributors.values():
        members.append({
            'displayName': contributor['github'],
            'lastName': contributor['github'].lower(),
            'headshot': contributor['headshot'],
            'organization': None,
            'description': None,
            'twitter': None,
            'linkedin': None,
            'github': contributor['github'],
            'homepage': contributor['homepage'],
            'categories': [
                'contributors'
            ]
        })


if __name__ == '__main__':
    if 'GITHUB_TOKEN' not in os.environ:
        print('API rate limits might be hit without GITHUB_TOKEN being set')
    all_contributors = get_cyclonedx_contributors()
    working_group_members = get_working_group_members()
    remove_working_group_members_from_contributors(working_group_members, all_contributors)
    add_new_contributors(working_group_members, all_contributors)
    with open('about/working-groups/working-groups.json', 'wt') as f:
        json.dump(working_group_members, f, indent=2)
