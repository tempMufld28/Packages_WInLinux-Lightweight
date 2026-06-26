const { platform } = process;

export const IS_WIN = platform === 'win32';
export const IS_LINUX = platform === 'linux';
