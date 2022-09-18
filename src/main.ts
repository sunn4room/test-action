import { getInput, info, setFailed } from '@actions/core'
import { getExecOutput } from '@actions/exec'

async function run(): Promise<void> {
  try {
    const d = getInput('dict')
    info('---')
    info(d)
    info('---')
    const dd = JSON.parse(d)
    info(dd.name)
    info(dd.age.toString())
    info('---')
    const out = await getExecOutput('ls')
    info(out.stdout)
    info('---')
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message)
    }
  }
}

run()
