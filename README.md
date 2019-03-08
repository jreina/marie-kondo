# Marie-Kondo
_Tidy up your project KonMari style!_  
`marie-kondo` will recursively delete random files from a directory. Consider this to be a minification tool.

## Why?
I cloned a repo that had **hundreds** of files in its root directory, none of which sparked joy. I then realized what the developer world needs is _our very own Marie Kondo_.

## Usage
```bash
npm install -g marie-kondo
```

To do a dry run:
```bash
marie-kondo c:\path\to\some\project\
```

To get to work, cleaning up 5% of the total number of files:
```bash
marie-kondo --fix c:\path\to\some\project\
```

To get to work, cleaning up 35% of the total number of files:
```bash
marie-kondo --fix --probability 0.35 c:\path\to\some\project\
```

## Disclaimer
### This project is going to screw up your project horrifically!
Before running this program, back up your project, check in your code to the remote, whatever you need to do. I make no guarantees regarding the behavior of this code. If run on the wrong directory, you could potentially destroy your OS. Please use with caution (or don't use at all)!

## License?
MIT
