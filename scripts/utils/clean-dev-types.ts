import path from 'path';
import rimraf from 'rimraf';

export function cleanDevTypes() {
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/**/*.story.d.ts'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/**/*.story.d.ts.map'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/**/styles.api.d.ts.map'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/**/styles.api.d.ts'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/**/*.test.d.ts'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/**/*.test.d.ts.map'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/src/demos.d.ts'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/src/demos.d.ts'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/demos.d.ts.map'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/demos.d.ts'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/src/components/*/demos'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/components/*/demos'));
  rimraf.sync(path.join(__dirname, '../../packages/*/lib/demos'));
}
