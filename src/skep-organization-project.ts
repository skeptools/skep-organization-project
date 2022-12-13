import * as path from 'path';
import { addFiles, allCases, loadSettings } from '@rlmartin-projen/projen-project';
import { typescript } from 'projen';

export interface SkepOrganizationProjectOptions extends typescript.TypeScriptProjectOptions {
  readonly organizationName: string;
}

export class SkepOrganizationProject extends typescript.TypeScriptProject {
  constructor(options: SkepOrganizationProjectOptions) {
    const tempOptions = {
      ...options,
      _organizationName: allCases(options.organizationName),
    };
    const { options: projectOpts, files } = loadSettings(tempOptions, path.join(__dirname, '../files'), true);
    super(projectOpts);
    addFiles(this, files);
    // Add non-templated resources here
  }
}
