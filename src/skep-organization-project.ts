import * as path from 'path';
import { addFiles, loadSettings } from '@rlmartin-projen/projen-project';
import { cdk } from 'projen';

export interface SkepOrganizationProjectOptions extends cdk.JsiiProjectOptions {
}

export class SkepOrganizationProject extends cdk.JsiiProject {
  constructor(options: SkepOrganizationProjectOptions) {
    const { options: projectOpts, files } = loadSettings(options, path.join(__dirname, '../files'), true);
    super(projectOpts);
    addFiles(this, files);
    // Add non-templated resources here
  }
}
