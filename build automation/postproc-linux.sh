#!/bin/bash
#
# postproc-linux.sh 1.0.0
#
# Linux build script post-processor.
#
# This is called from build-linux-enhanced.sh after packages are built.
# Use this to copy additional resources or customize packages.
#
# (c)2024 HomesteadTools

if [ "$APP_ARCH" = "x64" ]; then
    :   
    # Handle x64 releases here
    # cp SOME_FILE "./dist/linux_${APP_ARCH}/"
fi

if [ "$APP_ARCH" = "arm64" ]; then
    :   
    # Handle ARM64 releases here
    # cp SOME_FILE "./dist/linux_${APP_ARCH}/"
fi

if [ "$APP_ARCH" = "armhf" ]; then
    :   
    # Handle ARM releases here
    # cp SOME_FILE "./dist/linux_${APP_ARCH}/"
fi 