const input = [
  '...|.#.|#.....|.#||#.|..|.........|...|.||#..||...',
  '##.|..#...|..#..#.##.#....|.#..#........|#.##|....',
  '.|..|#...#.....|||.|.....|.#.......|.#.....|...|..',
  '.#|.||#......#.||.|.....#|..||...#..|....##..#..#.',
  '.|.|##...##.|...|#..#|#|#...|...#||.|.|.|..|..||..',
  '...|#|....#..##...#.|.|##.#||.......||..||..#...|#',
  '.|..|.|.|.#|#.##.##|.#|.#|..|#.|....|..#...|#|#|.#',
  '...|#|....|.#.|......|.|.##..#..#|..|..|...#.#|...',
  '..||.|....|..#..||..|#|.##.....##||....|#........|',
  '.#.#||...||#.##..#.....|.#||#......|...#.|.....|..',
  '......##...#.........|.|#..||...|#||.##...|..##..|',
  '...||..##.#||......#....|.||#|.....|..........#.|#',
  '.....|..|##.|##.#....|.||#...#..#...#.|..|.#...###',
  '.|.#|#.||..#..#...#..|..|......|#|....|.........|.',
  '.#|.#.##..|.#.|.#.#..#|.....|#.#...#...|###..#.#.|',
  '#|..#|..|.........|#.|...#..#.|.#|...|.....|.#||.#',
  '.#....#..|.#|##|##...|.||##.#.|.|...|..#||..#...|.',
  '#.|.||#|||.#|....|....#.##.||#|...|...#...#.##.#..',
  '.#.##.|#.#..|##|.#...........|.|.|..||||.|.|...#|#',
  '|..#...#.#..||....#...##..|.#..#..|..#....##....#.',
  '.|||#.|.........#|.|.|#..##...|....##.|.|.....##..',
  '.....|.|..|#||.#..|........||.#|.....###.#...||#.|',
  '..|||||.##.##...##|...#|.|.#|......|...|#..#....#|',
  '..|#.##......#||....|.|.##.#.|#|.#|||..|.#|.#.#.#.',
  '...#.#...#...#..#..|.#.|...|..|............#...|..',
  '#.....##...#.#.|..#....|.....#.##..##..#..........',
  '||.##..###||.#.#.|..|.#..#.|||#...|#...|..#....|..',
  '..||.#|..........|...|.##...|...|.#....|.#|...|#|.',
  '..||.#...|.|.|...#|.##..||.....#.##....##....#.###',
  '#####..#..#.||...|||...|....|||#.##.#.......##....',
  '..|.##.#.#||.#..#.....||..|#..#...|.|..||.|||...|.',
  '.#.#..#.#.|#.#...#.#.#.##..|#..|..#.||.#..#.....|.',
  '#|..#|......#.#..|...#....#..#..#.##..##..|..#|...',
  '#.|##...#..|.#..#..#||..#...|..#|#|.||#|.||.#.....',
  '##|....#...#|.|#.##.|#|||#|#.#....|....||....|#...',
  '.#|...#...#..#..........||.||...|..||.#.#..|....|#',
  '|..#..####|#.|.#..#...#|.#.##....|#..#..||#.#|.#..',
  '||.|#..|..#....|..#||.|||.|#.|.#|##.|.|.||.|.|#|..',
  '.....|....|...|.#..####|#|....|...|.|....|..#..|..',
  '...#|....|..##.#.|...|..#.#||#.|.#|..|#.|.#...|...',
  '.....##...#|...#|#....|....|###|#..|..|.#.#.....#.',
  '#.|.|.#.#|....#|.#...|##..#.|.##....|.||.....#.#.#',
  '|#.#..#..#|||.....|...|.||||..##..##..|#.|###.|.|.',
  '.#.|...|..........|.|.##|..|.......#|....#...|#|..',
  '..#.#..||..|||...|..#||..#..|..||..#.#..|..|.|...|',
  '|......##|......|..#||||#...|||..........|#.|.|.#.',
  '#|..#.||..|..#........|#.#....#.|.#|#..#........|.',
  '..|#..|.##.#.....#...#..|#.|##.#.#||#......##....|',
  '..|..#.......|##.#.#.|##|.......|.#.......|.#.#.|.',
  '#...|.....#|......|||#||...#....#||.|#....|...#..|',
];

const test = [
  '.#.#...|#.',
  '.....#|##|',
  '.|..|...#.',
  '..|#.....#',
  '#.#|||#|#|',
  '...#.||...',
  '.|....|...',
  '||...#|.#|',
  '|.||||..|.',
  '...#.|..|.',
];

module.exports = { input, test };