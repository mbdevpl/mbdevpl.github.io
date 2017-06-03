.. title: OpenStage SDK
.. slug: openstage-sdk
.. date: 2011-09-29 17:42:00 UTC+02:00
.. tags: Java, XML, MySQL, open source, Apache 2.0
.. category: project
.. link:
.. description: SDK for OpenStage 60/80 SIP phones, in Java
.. type: text
.. template: project.tmpl
.. status: 7
.. github: https://github.com/mbdevpl/OpenStageSDK
.. language: Java
.. license: Apache License 2.0

Hello world!

OpenStage SDK is a software development kit (SDK), which I've developed for OpenStage 60/80 SIP
phones during my internship in Siemens Enterprise Communications (now Unify). Main purpose of it
is making creation of OpenStage 60/80 XML applications a lot easier. OpenStage phone
has several APIs (application programming interfaces) for: creating GUI (graphical user interface),
direct key input, audio streaming and push. OpenStageSDK makes it easier to use these APIs,
because it unifies them into a single library.

.. TEASER_END

To show capabilities of the SDK, I have also prepared 2 example applications that use the SDK:

*   **Google Define** - a very simple app that lets you check definition of a word directly from
    OpenStage phone using Google.

    GitHub repository: https://github.com/mbdevpl/OpenStageSDK-GoogleDefine

*   **Open IM** - a client-server application that lets users of OpenStage phones belonging
    to the same local network (clients) exchange instant messages via a central service that runs
    on some other machine in the same network (server).

    GitHub repository: https://github.com/mbdevpl/OpenStageSDK-OpenIM

The SDK and application binaries are available for download from GitHub:
`<https://github.com/mbdevpl/OpenStageSDK/releases/tag/v1.0>`_

There, you'll find also:

*   Document `OpenStageSDK intro - creating applications for OpenStage.pdf <https://github.com/mbdevpl/OpenStageSDK/releases/download/v1.0/OpenStageSDK.intro.-.creating.applications.for.OpenStage.pdf>`_
    that will guide you trough the first steps of using the SDK.

    The SDK is written in such a way that only elementary programming knowledge is needed
    to start development. It is free and open source software and was made using free and
    open source software.

*   An all-in-one package comprising all binaries, documentation and source code:
    `openstagesdk_2011-11-30.zip <https://github.com/mbdevpl/OpenStageSDK/releases/download/v1.0/openstagesdk_2011-11-30.zip>`_.
    It was originally published on corporate wiki of Siemens Enterprise Communications (now Unify)
    on 30 November 2011:
    `<http://wiki.unify.com/wiki/File:SDK_Environment_OpenStage_60_80_SIP.zip>`_.
