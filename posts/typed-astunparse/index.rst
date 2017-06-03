.. title: Typed Python AST (abstract syntax tree) unparser
.. slug: typed-astunparse
.. date: 2016-06-16 18:13:00 UTC+09:00
.. tags: Python, open source, Apache 2.0
.. category: project
.. link:
.. description: typed-astunparse is to typed-ast as astunparse is to ast
.. type: text
.. template: project.tmpl
.. status: 3
.. download: https://pypi.python.org/pypi/typed-astunparse
.. github: https://github.com/mbdevpl/typed-astunparse
.. language: Python
.. license: Apache License 2.0

.. role:: bash(code)
    :language: bash

.. role:: python(code)
    :language: python

The *typed-astunparse* Python package is to *typed-ast* as *astunparse* is to *ast*. In 10 words:
it enables unparsing of Python 3 AST with type comments.

.. TEASER_END

The built-in *ast* module can parse Python source code into AST. It can't, however, generate source
code from the AST. That's where *astunparse* comes in. Using a refactored version of an obscure
script found in official Python repository, it provides code generation capability for native
Python AST.

The *ast* and *astunparse* modules, however, completely ignore type comments introduced in
PEP 484. They treat them like all other comments, so when you parse the code using
:python:`compile()`, your type comments will be lost. There is no place for them in the AST, so
obviously they also cannot be unparsed.

The *typed-ast* module provides an updated AST including type comments defined in PEP 484 and
a parser for Python code that contains such comments.

Unfortunately, *typed-ast* doesn't provide any means to go from AST back to source code with type
comments. This is where this module, *typed-astunparse*, comes in. It provides unparser for AST
defined in *typed-ast*.


links
-----

-  *ast*:

   https://docs.python.org/3/library/ast.html

   https://greentreesnakes.readthedocs.io/

-  *astunparse*:

   https://pypi.python.org/pypi/astunparse

   https://github.com/simonpercivall/astunparse

   https://astunparse.readthedocs.io/en/latest/

-  PEP 483 - The Theory of Type Hints:

   https://www.python.org/dev/peps/pep-0483/

-  PEP 484 - Type Hints:

   https://www.python.org/dev/peps/pep-0484/

-  PEP 3107 - Function Annotations:

   https://www.python.org/dev/peps/pep-3107/

-  PEP 526 - Syntax for Variable Annotations:

   https://www.python.org/dev/peps/pep-0526/

-  *typed-ast*:

   https://pypi.python.org/pypi/typed-ast

   https://github.com/python/typed_ast
