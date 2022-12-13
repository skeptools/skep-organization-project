import { SkepOrganizationProject } from '../src';

test('ProjenProject', () => {
  const project = new SkepOrganizationProject({
    name: 'foo-project',
    defaultReleaseBranch: 'main',
    author: 'Foo Bar',
    authorAddress: 'foo.bar@example.com',
    repositoryUrl: 'url',
  });
  const fileNames = project.files.map(_ => _.path);
  ['.projen/tasks.json'].forEach(fileName => {
    expect(fileNames).toContain(fileName);
  });
});