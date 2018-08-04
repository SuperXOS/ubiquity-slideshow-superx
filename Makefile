# Makefile for ubiquity-slideshow-ubuntu

SOURCE=.
BUILD=$(SOURCE)/build
SOURCESLIDES=$(SOURCE)/slideshows

all: clean build_superx

build_init:
	mkdir -p $(BUILD)

build_superx: build_init
	cp -rL $(SOURCESLIDES)/superx $(BUILD)

translations:
	./generate-local-slides.sh superx

.PHONY : clean

clean:
	-rm -rf $(BUILD)
