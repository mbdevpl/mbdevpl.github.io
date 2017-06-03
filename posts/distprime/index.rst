.. title: Distprime
.. slug: distprime
.. date: 2013-06-16 16:21:00 UTC+02:00
.. tags: C, Linux, open source, GNU GPL 3.0
.. category: project
.. link:
.. description: distributed prime numbers discovery
.. type: text
.. template: project.tmpl
.. status: 7
.. github: https://github.com/mbdevpl/distprime
.. language: C
.. license: GNU General Public License v3.0

Open-source application for distributed discovery of prime numbers. The application is capable
of looking up numbers from 2 to 263-1 - per project requirements.

.. TEASER_END

It is an academic project. Implemented in pure C99, according to rules of UNIX programming.
Therefore, it is POSIX compliant, and therefore it should work without problems in any modern
distribution of Linux. Due to the fact that application depends on being launched
simultaneously on many machines, portability is a requirement, not an option.

Overview of the behaviour of the application, it certainly is not a UML diagram:

.. image:: https://raw.githubusercontent.com/mbdevpl/distprime/master/distprime.png
    :alt: general overview of behaviour of Distprime

More information about how the program works can be found in README.rst file in the repository.
