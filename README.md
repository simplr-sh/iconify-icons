# Iconify Icons

This project provides a collection of icons derived from the [Iconify](https://iconify.design/) project. The icons are generated from the JSON data provided by the [iconify/icon-sets](https://github.com/iconify/icon-sets) repository.

## Usage

The icons are available as individual SVG files within the `icons` directory. You can access them directly via JSDelivr URLs, for example:

```
https://cdn.jsdelivr.net/gh/simplr-sh/iconify-icons/icons/academicons/academia-square.svg
```


Replace `academicons/academia-square.svg` with the path to the specific icon you need.

```
https://cdn.jsdelivr.net/gh/simplr-sh/iconify-icons/icons/<folder-name>/<file-name>.svg
```

## Installation

To install dependencies:

```bash
bun install
```


## Running the Project

This project uses `bun` as its runtime.

## How the Icons are Generated

The icons are generated using the `scripts/download-iconify-icon-sets-json-folder-contents.ts` script. This script does the following:

1.  Clones the [iconify/icon-sets](https://github.com/iconify/icon-sets) repository.
2.  Extracts the JSON data for each icon set.
3.  Validates the icon set data.
4.  Exports each icon set as a directory of SVG files within the `icons` directory.

## Project Structure

*   `icons/`: Contains the generated SVG icon files, organized into subdirectories based on the icon set name.
*   `scripts/`: Contains the `download-iconify-icon-sets-json-folder-contents.ts` script used to generate the icons.
*   `index.ts`: A simple entry point for the project.
*   `package.json`: Defines the project's dependencies and scripts.
*   `tsconfig.json`: Configures the TypeScript compiler.
*   `README.md`: This file.
*   `.gitignore`: Specifies intentionally untracked files that Git should ignore.

## Dependencies

This project uses the following dependencies:

*   `@iconify/tools`: For processing and exporting icon sets.
*   `@iconify/utils`: For validating icon set data.

## Contributing

If you'd like to contribute to this project, please feel free to submit a pull request.

## License

This project is based on the [Iconify](https://iconify.design/) project, which is licensed under the [MIT License](https://github.com/iconify/iconify/blob/main/LICENSE). Please refer to the Iconify project for more information on licensing.