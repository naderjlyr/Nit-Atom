# Nit-Atom

Nit language support for Atom text editor including Autocomplete feature, Snippets, and Syntax Highlighter.

## What is Nit?

According to its [official website](http://nitlanguage.org), Nit is an expressive programming language with a script-like syntax,
a friendly type-system and aims at elegance, simplicity and intuitiveness. The Nit project is currently
in alpha stage, at v0.8. It is in active development, moving fast and the APIs are still evolving

## What is Atom?

Atom is a free and open-source text and source code editor for macOS, Linux, and Microsoft Windows with support for plug-ins written in Node.js, and embedded Git Control, developed by GitHub. Atom is a desktop application built using web technologies. Most of the extending packages have free software licenses and are community-built and maintained. Atom is based on Electron (formerly known as Atom Shell), a framework that enables cross-platform desktop applications using Chromium and Node.js. It is written in CoffeeScript and Less. Atom was released from beta, as of version 1.0, on 25 June 2015. Its developers call it a "hackable text editor for the 21st Century".

## Autocomplete, Snippet, and Syntax Highlighter

Autocomplete, or word completion, is a feature in which an application predicts the rest of a word a user is typing. In graphical user interfaces, users can typically press the tab key to accept a suggestion or the down arrow key to accept one of several.
Snippet is a programming term for a small region of the re-usable source code, machine code, or text. Ordinarily, these are formally defined operative units to incorporate into larger programming modules. It allows the user to avoid repetitive typing in the course of routine edit operations.
Syntax highlighting is a feature of text editors that are used for programming, scripting, or markup languages, such as HTML. The feature displays text, especially source code, in different colours and fonts according to the category of terms.

## Nit-Atom Package

Every programming language has rooms for improvement and Nit does not take exception in this rule. This package provides some essential features including autocomplete, snippet, syntax highlighting for Atom text editor, and helps Nit programmers to save their time.
We have made a demo version of this package available in [this link](https://github.com/Nader-J/Nit-Atom/). We did not upload this package to the Atom.io packages, because our package needs some modifications to be made and of course, after these mandatory changes, it will be uploaded to the Atom.io repository for people use.

## Local Package Installation

**It is a very straightforward process**
- Install a proper version of Atom text editor based on your OS. [Official Download](https://atom.io/)
- Clone this repository
- Extract the package to a permanent directory.
- In order to install the package on Atom, run CMD in the directory with the following command:
``` apm link ```

This command links and installs the Nit-Atom package directory to the Atom’s package directory.

## How to Use
**Note**: In order to make this package works, at the very first step, create a new file and save it with .nit extension.

- For using the autocomplete feature, just type 2 characters of your keyword and the keyword suggestion list will appear right away, and you can choose one of the suggested words from the list by pressing Tab(for picking first suggested word) and using keyboard arrows(for navigating through the list).
- For using the snippet feature, type @, and the snippet suggestion list will appear. Press Tab to pick the very first suggested snippet and use Arrows to navigate the list.
- Grammar works automatically and identifies any mistake that you have done in your code.


## Checklist

**Note:** This is the alpha version of the package, and all the necessary updates & changes will be applied in the next versions.
Here is the list of the applied task on the package.
- [x] Syntax Highlighter,Grammar file
- [x] Autocomplete feature
- [x] Snippet generator. **Note:** It works perfectly but all the necessary snippets should be included. 
- [ ] Change the structure of snippet generator. **Note:** snippet generator gets its data from an URL,which needs to get them from a local file.
- [ ] Convert Grammar structure. **Note:** Our TextMate Grammar should be turned to Tree-sitter Grammar which is a the preferred structure for Atom.






