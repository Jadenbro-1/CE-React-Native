import IMGLYCamera, { CameraSettings } from '@imgly/camera-react-native';

export const recordings_reaction_camera_solution = async (): Promise<void> => {
  const settings: CameraSettings = {
    license: 'YOUR_LICENSE_KEY'
  };

  try {
    const result = await IMGLYCamera.openCamera(
      settings,
      require('MY_VIDEO_SOURCE')
    );
    // highlight-cancelled
    if (result === null) {
      console.log('The editor has been cancelled.');
      return;
    }
    // highlight-cancelled
    // highlight-reaction
    console.log(result.video.duration);
    result.video.videos.forEach((video) => {
      console.log(video.uri);
      console.log(video.rect);
    });

    result.recordings.forEach((recording) => {
      console.log(recording.duration);
      recording.videos.forEach((video) => {
        console.log(video.uri);
        console.log(video.rect);
      });
    });
    // highlight-reaction
  } catch (error) {
    // highlight-failure
    console.log(`Error occurred in the camera session: ${error}.`);
    // highlight-failure
  }
};
