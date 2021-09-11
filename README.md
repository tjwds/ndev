# nodedev

Hello!

This is currently in a clearly proof-of-concept state, with lots of `TODO`s remaining in the code for basic functionality.

## Usage

`nodedev register` — Invoke this in the directory containing your library to register it with ndev.
`nodedev develop name` — Invoke this in a project to swap in the already-registered library for development

## Example

Say Project A is an app, and Project B is a library that that project uses.

First, navigate to `/projects/project_b`.  Invoke `nodedev register`, and Project B will be registered under the name provided in its package.json — let's say this is `projectB`.

Next, navigate to `/projects/project_a`.  Invoke `nodedev develop projectB` and project B will be installed from its home on your local machine, as well as symlinked at the top level.
