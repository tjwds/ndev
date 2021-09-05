# ndev

Hello!

This is currently in a clearly proof-of-concept state, with lots of `TODO`s remaining in the code for basic functionality.

## Usage

`ndev register` — Invoke this in the directory containing your library to register it with ndev.
`ndev develop name` — Invoke this in a project to swap in the already-registered library for development

## Example

Say Project A is an app, and Project B is a library that that project uses.

First, navigate to `/projects/project_b`.  Invoke `ndev register`, and Project B will be registered under the name provided in its package.json — let's say this is `projectB`.

Next, navigate to `/projects/project_a`.  Invoke `ndev develop projectB` and project B will be installed from its home on your local machine, as well as symlinked at the top level.
