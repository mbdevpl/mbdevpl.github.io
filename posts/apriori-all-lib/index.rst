.. title: Apriori and Apriori All library
.. slug: apriori-all-lib
.. date: 2013-01-21 18:13:00 UTC+02:00
.. tags: Csharp, OpenCL, .NET, Windows, open source, GNU GPL 3.0
.. category: project
.. link:
.. description: library implementing Apriori and Apriori All algorithms
.. type: text
.. template: project.tmpl
.. status: 6
.. github: https://github.com/mbdevpl/AprioriAllLib
.. language: C#, OpenCL
.. license: GNU General Public License v3.0

Apriori and Apriori All are algorithms used for sequence mining, a type of data mining that is very
commonly used in a shopping environment. When you see a list of products titled "users
who bought this also bought that" or if you see that an alcohol section in a shop is next
to snacks section, chances are that sequence mining is behind that.

.. TEASER_END

This projects is essentially a .NET class library that implements two closely related data mining
algorithms: Apriori and Apriori All. The library contains Apriori algorithm in single-thread version
done exclusively in C#, and parallel version implemented by mixing C# with OpenCL.
The project also includes performance analysis and comparison of both implementations
of Apriori algorithm. On the other hand, Apriori All is implemented only in one-thread version
at the moment. Implementation of parallel version of Apriori All algorithm is planned,
but I honestly don't know when I'll get down to it.

The library is accompanied by two programs: a benchmark tool that can measure running time
for various inputs and other constraints, and a simple console application that is linked
to the library so that you can see how the algorithm library can be used in practice.


-------
Apriori
-------

Serialized version of the algorithm was implemented by my classmate. I've implemented
the parallel version. The parallelization was done using divide and conquer method,
and I've mainly used general-purpose kernels like logical operators, maximum, minimum or sum.
In general, implementation depends on sequential launching of parallel scan in three phases
with barriers between them, until the final results are obtained.


-----------
Apriori All
-----------

My implementation of this algorithm is based on prefix trees - a data structure ideal
for this algorithm. In very early version, without the prefix trees the algorithm slowed down
very quickly as the database size increased. With prefix trees, the slowdown is at much lower level.

The library is capable of reading XML files with input, as well as C# arrays and any objects
that implement specially designed interfaces. Implementing those interfaces
is the recommended way of using the library in your project. The library depends
on `AbstractOpenCL </posts/abstract-opencl>`_ - one of my other projects.

Apriori All Lib is open-source, and of course all required binaries are provided in the repository.
