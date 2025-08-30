import path from 'node:path';
// const pathToWorkDir = path.join(process.cwd());
// отримуємо шлях до кореневої директорії викликом метода process.cwd()
// export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json');

export const PATH_DB = path.resolve('src', 'db', 'db.json');
