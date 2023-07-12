export type ScmType = "github" | "gitlab" | "ecr";

export type Integration = {
  apiKey: string;
  baseUrl: string;
  scmType: ScmType;
  readableName: string;
  status: string;
  id: string;
};
export type IntegrationResponse = {
  integrations: Integration[];
};
export type CreateIntegration = Pick<
  Integration,
  "apiKey" | "baseUrl" | "scmType" | "readableName"
>;
