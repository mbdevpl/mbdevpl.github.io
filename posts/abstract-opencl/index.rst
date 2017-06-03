.. title: AbstractOpenCL
.. slug: abstract-opencl
.. date: 2013-07-04 10:01:00 UTC+02:00
.. tags: C++, Csharp, OpenCL, .NET, Qt, Linux, Windows
.. category: project
.. link:
.. description: abstraction layer over OpenCL for C++ and C#
.. type: text
.. template: project.tmpl
.. status: 4
.. language: C++, C#, OpenCL
.. license: Proprietary

A unified OpenCL abstraction layer for C++ and C#. Work in progress.

.. TEASER_END

In this project, I aim to create a unified OpenCL abstraction layer for C++ and C#. This project
is motivated by the contrast between obvious fact that OpenCL can be far more powerful and
is more universal than CUDA, and the second obvious fact that it is less programmer-friendly.

I prefer to work with OpenCL because it gives me a astronomical level of portability.
Current features of the library focus on usability issues and error tracing.

List of current features, it may be missing some latest additions:

*   default platform and default device
*   option to set a default command queue
*   finding device by vendor, name, extensions it has, ...
*   optional and partial OpenCL API calls validation and diagnostics
*   throwing meaningful c++ exceptions on critical OpenCL errors
*   simple information query system for platform, device, context, ...
*   fast argument setting system for kernel
*   simplified OpenCL source code management
*   freeing OpenCL-related memory via single Dispose() method
*   overloaded std::ostream << operators for most objects
*   small set of high quality reusable kernels - but only for simple operations
*   easier global and local size setting to max available at runtime

Many more features are added as I go, because I simply do not know in advance all aspects
of OpenCL that can be improved.

Currently the project is not released to public - maybe later.
