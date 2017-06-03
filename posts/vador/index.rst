.. title: VaDoR - Vanishing Domino pRoblem solver
.. slug: vador
.. date: 2012-11-21 22:40:00 UTC+02:00
.. tags: C++, Qt, open source, GNU GPL 3.0
.. category: project
.. link:
.. description: solver for the VAnishing DOmino pRoblem
.. type: text
.. template: project.tmpl
.. status: 7
.. github: https://github.com/mbdevpl/VaDoR
.. language: C++
.. license: GNU General Public License v3.0

A 3-person team project that we did for Algorithms & Complexity course during our Bachelor
studies. The project introduced the problem starting with a rectangular board filled with domino
pieces, and defined certain rules for removing them. The task was to design and implement an
algorithm that removes (in accordance with rules) as many domino pieces as possible from the board
as quickly as possible. Hence the name VaDoR, from VAnishing DOmino pRoblem.

.. TEASER_END

Originally, a detailed problem description was available on a co-lecturer's page at:
`http://alpha.mini.pw.edu.pl/~lucknerm/downloads/AC/domino.pdf`
but it seems to be no longer there. We provide a backup in this repository.


Technicalities
--------------

We implemented the solver to the above-defined problem that solves it in exponential time, O( 2^n ).
We also prepared several approximate solvers, each with polynomial time complexity,
O( n^2 ), but the solutions obtained by those is not guaranteed to be optimal of course.

Program accepts two input formats: XML and txt. Format details are described in the documentation.

This software depends on Qt. It works with Qt 4.8, 5.5, 5.6, 5.7 and most probably with many other
Qt versions. It works on Ubuntu 12.04, Ubuntu 14.04, Ubuntu 16.04, Windows 7 and probably some
other systems too.

Program uses as much memory as available, so it might need several Gigabytes of RAM for large
problems. For example it analysed around 15000000 states (possible domino pieces configurations)
before running out of memory on my lap-top which had 2GiB of RAM at the time. In such cases program
clears some of the allocated memory and proceeds. It is still able to produce a correct answer,
however the complexity might increase beyond O( 2^n ) because of some repeated computation.

When we were implementing the algorithm, we thought that the vanishing domino problem is
NP-complete, and most probably it is, but I think we didn't actually formally prove it at the time.
