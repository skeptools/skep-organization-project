import { SkepOrganizationProject } from '../src';

test('ProjenProject', () => {
  const project = new SkepOrganizationProject({
    name: 'foo-project',
    defaultReleaseBranch: 'main',
    organizationName: 'Foo Company',
  });
  const fileNames = project.files.map(_ => _.path);
  ['.projen/tasks.json'].forEach(fileName => {
    expect(fileNames).toContain(fileName);
  });
});