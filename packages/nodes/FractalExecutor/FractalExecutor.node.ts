import { IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';

export class FractalExecutor implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Fractal Executor',
    name: 'fractalExecutor',
    icon: 'file:fractal.svg',
    group: ['transform'],
    version: 1,
    description: 'Executes LLM-generated code in sandbox (Fractal Mode)',
    defaults: { name: 'Fractal Executor' },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      {
        displayName: 'Prompt',
        name: 'prompt',
        type: 'string',
        default: 'Generate a simple shopping agent',
        required: true,
        description: 'Prompt sent to LLM for code generation',
      },
      {
        displayName: 'Worker URL',
        name: 'workerUrl',
        type: 'string',
        default: 'https://fractal-runner.your-domain.workers.dev/v1/fractal/run',
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    for (let i = 0; i < items.length; i++) {
      const prompt = this.getNodeParameter('prompt', i) as string;
      const workerUrl = this.getNodeParameter('workerUrl', i) as string;

      // Placeholder simulation (production: POST to Rust worker)
      const simulatedResult = {
        snippet: `// LLM-generated code for: ${prompt}\nconsole.log(\"Hello Agent!\");`,
        result: 'Executed successfully (simulated)',
        workerUrl,
      };

      returnData.push({ json: simulatedResult });
    }

    return [returnData];
  }
}