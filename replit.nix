{ pkgs }: {
    deps = [
      pkgs.libev
      pkgs.pandoc
      pkgs.glibcLocales
      pkgs.gitFull
      pkgs.gnuplot
    ];
  env = {
    PYTHON_LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
      pkgs.libev
      pkgs.glibcLocales
      pkgs.gitFull
    ];
  };
}