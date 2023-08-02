import { dockerEnvVarFix } from './docker/envFix';

export const DEFAULT_MODEL =
  dockerEnvVarFix(process.env.NEXT_PUBLIC_DEFAULT_MODEL) || 'gpt-3.5-turbo';

export const DEFAULT_OPENAI_SYSTEM_PROMPT =
  dockerEnvVarFix(process.env.NEXT_PUBLIC_DEFAULT_OPENAI_SYSTEM_PROMPT) ||
  "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";

export const DEFAULT_ANTHROPIC_SYSTEM_PROMPT =
  dockerEnvVarFix(process.env.NEXT_PUBLIC_DEFAULT_ANTHROPIC_SYSTEM_PROMPT) ||
  '\n\nHuman: You are Claude, a large language model trained by Anthropic. Follow the my instructions carefully. Respond using markdown.\n\nAssistant: Okay.';

export const DEFAULT_PALM_SYSTEM_PROMPT =
  dockerEnvVarFix(process.env.NEXT_PUBLIC_DEFAULT_PALM_SYSTEM_PROMPT) ||
  "You are Bard, a large language model trained by Google. Follow the user's instructions carefully. Respond using markdown. Always specify the programming language you are using when making a markdown code block.";

export const OPENAI_API_URL =
  dockerEnvVarFix(process.env.OPENAI_API_URL) || 'https://api.openai.com/v1';

export const OPENAI_API_KEY = dockerEnvVarFix(process.env.OPENAI_API_KEY) || '';

export const DEFAULT_TEMPERATURE = parseFloat(
  dockerEnvVarFix(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE) || '0.7',
);

export const OPENAI_API_TYPE =
  dockerEnvVarFix(process.env.OPENAI_API_TYPE) || 'openai';

export const OPENAI_API_VERSION =
  dockerEnvVarFix(process.env.OPENAI_API_VERSION) || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  dockerEnvVarFix(process.env.OPENAI_ORGANIZATION) || '';

export const ANTHROPIC_API_URL =
  dockerEnvVarFix(process.env.ANTHROPIC_API_URL) ||
  'https://api.anthropic.com/v1';

export const ANTHROPIC_API_KEY =
  dockerEnvVarFix(process.env.ANTHROPIC_API_KEY) || '';

export const ANTHROPIC_API_VERSION =
  dockerEnvVarFix(process.env.ANTHROPIC_API_VERSION) || '2023-06-01';

export const PALM_API_URL =
  dockerEnvVarFix(process.env.PALM_API_URL) ||
  'https://generativelanguage.googleapis.com/v1beta2';

export const PALM_API_KEY = dockerEnvVarFix(process.env.PALM_API_KEY) || '';

export const APP_DOMAIN =
  dockerEnvVarFix(process.env.NEXT_PUBLIC_APP_DOMAIN) ||
  'http://localhost:3000';
