.. title: Phinite
.. slug: phinite
.. date: 2013-05-25 19:28:00 UTC+02:00
.. tags: Csharp, LaTeX, XAML, .NET, WPF, Windows, open source, GNU GPL 3.0
.. category: project
.. link:
.. description: WPF application for creating a deterministic finite-state machine equivalent to a given regular expression
.. type: text
.. template: project.tmpl
.. status: 7
.. github: https://github.com/mbdevpl/Phinite
.. language: C#, LaTeX, XAML
.. license: GNU General Public License v3.0

Phinite is a windows desktop application that implements an approximate solution to a language
theory problem. The task was to create a deterministic finite-state machine that is equivalent
to a given regular expression.

.. TEASER_END

In short, it is a desktop application that enables user to enter a regular expression
(i.e. expression formed in a regular language) and then automatically creates a deterministic
finite-state machine that is equivalent to this given expression (i.e. a directed graph-like
structure that can simulate the process of parsing the give regular expression).

The app is developed in C#, using WPF (Windows Presentation Foundation) and many other libraries
like Graph#, WPF Toolkit, WPF Converters, etc. It's an open-source project. Another feature
of the app is ability to generate LaTeX and then PDF file that summarizes the work that was done
(i.e. how the finite-state machine was constructed) for a given input. Such report
is automatically generated if a LaTeX distribution (e.g. MiKTeX, texlive, or equivalent)
is present on the computer. After the finite-state machine is generated, user can supply
some example words to see behaviour of the generated construct.

To layout the nodes of graphical representation of the machine, the program uses gravitational
algorithm provided by Graph# library. I've written my own algorithm to properly layout edges
and labels - to handle cases of crossing edges, case where there is an edge from A to B
as well as from B to A, and a case where edge label is covered by some other elementof the canvas,
as well as some other rare corner cases. Such complexity is required in order to achieve
nice looking output regardless of what data the user gives to the program.

This project is purely academic, and if you are not sure what some of the terms used
in previous paragraphs mean, I suggest following links to Wikipedia. I daresay that the source code
is well-documented, so if you'd like to use some of it in your open-source project, be my guest.
In its documentation section, the project has a business analysis and technical documentation
written prior to final implementation. The final implementation follows (or at least attempts
to follow) the pre-written documentation. I've attached quick help guides to most vital elements
of the application. These many quick tips are available from within the application via "?" buttons,
so you can learn what to do as you go.
