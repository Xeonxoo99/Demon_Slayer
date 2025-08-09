// import FontFaceObserver from 'fontfaceobserver';

// App.js에서 직접 사용하는 에셋들을 여기서도 import 합니다.
// 로딩 목록에 포함시키기 위함입니다.
import video from './images/video/introVideo.mp4';
import logo from './images/pub/logo/로고.png';
import off from './images/pub/bgm/off.png';
import leftdoor1 from './images/pub/door/leftdoor1.png';
import leftdoor2 from './images/pub/door/leftdoor2.png';
import rightdoor1 from './images/pub/door/rightdoor1.png';
import rightdoor2 from './images/pub/door/rightdoor2.png';

// 1. require.context를 이용해 src/images 폴더의 모든 에셋을 동적으로 불러옵니다.
function importAll(r) {
    return r.keys().map(r);
}
const dynamicSrcAssets = importAll(
    require.context('./images', true, /\.(png|jpe?g|svg|gif|webp)$/)
);

// 2. 수동으로 import한 주요 에셋 목록
const manualAssets = [
    video, logo,  off, leftdoor1, leftdoor2, rightdoor1, rightdoor2
];


/**
 * 모든 에셋(src, public, font)을 프리로드하는 함수
 * @param {function} onProgress - 로딩 진행률을 인자로 받는 콜백 함수
 */
export const loadAllAssets = (onProgress) => {
    return new Promise(async (resolve, reject) => {
        try {
            // 3. public 폴더의 에셋 목록을 fetch로 가져옵니다.
            const response = await fetch('/asset-manifest.json');
            const publicAssets = await response.json();
            const publicAssetPaths = publicAssets.images || []; // JSON 파일에 images 키가 없을 경우를 대비

            // 4. 모든 에셋 목록을 하나로 합칩니다.
            const allAssetsToLoad = [...manualAssets, ...dynamicSrcAssets, ...publicAssetPaths];

            // --- 프리로딩 시작 ---
            const totalAssets = allAssetsToLoad.length + 1; // 폰트 1개 추가
            let loadedCount = 0;

            // 이미지/비디오 등 에셋 프리로딩 프로미스
            const assetPromises = allAssetsToLoad.map(src => {
                return new Promise((assetResolve, assetReject) => {
                    // src의 타입에 따라 실제 경로를 할당합니다.
                    // import된 모듈은 .default를 사용해야 할 수 있습니다.
                    const path = typeof src === 'string' ? src : src.default || src;

                    // 비디오인지 이미지인지 확장자로 간단히 구분
                    if (path.endsWith('.mp4')) {
                        const vid = document.createElement('video');
                        vid.src = path;
                        vid.oncanplaythrough = () => {
                            loadedCount++;
                            const progress = Math.round((loadedCount / totalAssets) * 100);
                            onProgress(progress);
                            assetResolve();
                        };
                        vid.onerror = assetReject;
                    } else {
                        const img = new Image();
                        img.src = path;
                        img.onload = () => {
                            loadedCount++;
                            const progress = Math.round((loadedCount / totalAssets) * 100);
                            onProgress(progress);
                            assetResolve();
                        };
                        img.onerror = assetReject;
                    }
                });
            });

            // 모든 프로미스가 완료될 때까지 기다립니다.
            await Promise.all([...assetPromises]);
            resolve();

        } catch (error) {
            reject(error);
        }
    });
};