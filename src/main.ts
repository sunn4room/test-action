import core from '@actions/core'
// import exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const d = core.getInput('dict')
    core.info('---')
    core.info(d)
    core.info('---')
    const dd = JSON.parse(d)
    core.info(dd.name)
    core.info(dd.age.toString())
    core.info('---')
    // const out = await exec.getExecOutput('ls')
    // core.info(out.stdout)
    // core.info('---')
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
