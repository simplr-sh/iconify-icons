import { IconSet, exportToDirectory } from '@iconify/tools/lib/index.js'
import { validateIconSet } from '@iconify/utils'
import { $, Glob } from 'bun'

const glob = new Glob('*.json')

async function main() {
  await $`echo "Cloning icon-sets repo"`
  const output =
    await $`git clone --no-checkout --depth=1 https://github.com/iconify/icon-sets.git`.text()
  console.log(output)
  await $`echo "Cloned icon-sets repo"`
  await $`echo "Downloading icon-sets repo json folder contents"`
  await $`cd icon-sets && git checkout master -- json && rm -rf .git`
  await $`echo "Downloaded icon-sets repo json folder contents"`
  await $`echo "Deleted .git folder"`

  const text = await $`cd ./icon-sets/json && ls`.text()
  console.log('icon-sets repo listing\n', text)

  for await (const file of glob.scan('./icon-sets/json')) {
    const rawData = await Bun.file(`./icon-sets/json/${file}`).json()

    if (!Object.keys(rawData.icons).length) {
      continue
    }

    const validatedData = validateIconSet(rawData)

    const iconSet = new IconSet(validatedData)

    await exportToDirectory(iconSet, {
      target: `./icons/${file.split('.')[0]}`,
    })
  }

  await $`echo "Deleting cloned icon-sets repo"`
  await $`rm -rf icon-sets`
  await $`echo "Deleted cloned icon-sets repo"`
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
