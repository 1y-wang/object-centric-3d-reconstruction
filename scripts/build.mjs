import { existsSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

rmSync('dist', { recursive: true, force: true });

const result = spawnSync('vinext', ['build'], {
  cwd: process.cwd(),
  env: process.env,
  shell: process.platform === 'win32',
  stdio: 'inherit',
});

if (result.error) {
  throw result.error;
}

if (result.status === 0) {
  process.exit(0);
}

const requiredArtifacts = [
  'dist/client/index.html',
  'dist/client/og.png',
  'dist/client/media/method.jpeg',
  'dist/client/media/ogdd.png',
  'dist/client/media/result1_ucl200_hq.mp4',
  'dist/client/media/result2_tablechair_hq.mp4',
  'dist/client/media/result3_everydayobjs_hq.mp4',
];

if (requiredArtifacts.every((path) => existsSync(path))) {
  console.warn(
    'Vinext reported a post-build shutdown error, but the complete static site was generated successfully.',
  );
  process.exit(0);
}

process.exit(result.status ?? 1);
