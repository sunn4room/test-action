import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const d = core.getInput('dict')
    core.info(d)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
