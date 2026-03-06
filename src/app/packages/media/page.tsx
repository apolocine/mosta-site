import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/media — Image & Video Capture' }

export default function MediaPage() {
  return (
    <PackagePage
      pkg={packages[12]}
      quickStart={`import { ImageCapture, VideoCapture, ImageEditor, MediaGallery } from '@mostajs/media'
import { ScreenRecorder } from '@mostajs/media/components/ScreenRecorder'
import { useCamera } from '@mostajs/media/hooks/useCamera'
import { useScreenCapture } from '@mostajs/media/hooks/useScreenCapture'

// ── ImageCapture — Webcam + upload + screen capture ──────
<ImageCapture
  photo={photo}                        // current photo data URL (controlled)
  onCapture={(dataUrl) => set(dataUrl)} // called with captured image data URL
  onClear={() => setPhoto('')}          // called when user clears the photo
  allowUpload                           // enable file upload button (default: false)
  maxWidth={800}                        // auto-resize max width
  maxHeight={800}                       // auto-resize max height
  quality={0.85}                        // JPEG quality 0-1
  captureLabel="Take Photo"             // button label
  uploadLabel="Upload"                  // upload button label
  onError={(msg) => toast.error(msg)}   // error handler
/>

// ── VideoCapture — Webcam + screen with webcam overlay ───
<VideoCapture
  onCapture={(blob, url) => {           // called when recording stops
    setVideoUrl(url)                    // preview URL
    uploadVideo(blob)                   // Blob for upload
  }}
  maxDuration={120}                     // auto-stop after N seconds
  startLabel="Record"                   // start button label
  stopLabel="Stop"                      // stop button label
  onError={(msg) => toast.error(msg)}   // error handler
/>

// ── ImageEditor — rotate, crop, brightness, contrast ─────
<ImageEditor
  src={photo}                           // source image data URL
  onSave={(edited) => setPhoto(edited)} // called with edited data URL
  onCancel={() => setEditing(false)}    // cancel handler
  tools={['crop', 'rotate', 'brightness', 'contrast', 'flip']}
  format="image/jpeg"                   // output format
  quality={0.85}                        // output quality
/>

// ── MediaGallery — grid with lightbox ────────────────────
<MediaGallery
  items={[
    { id: '1', url: '/photos/1.jpg', type: 'image', name: 'Photo 1' },
    { id: '2', url: '/videos/demo.webm', type: 'video', thumbnail: '/t.jpg' },
  ]}
  columns={3}                           // grid columns
  deletable                             // show delete button
  onSelect={(item) => open(item)}       // click handler
  onDelete={(item) => remove(item.id)}  // delete handler
/>

// ── ScreenRecorder — floating debug/feedback widget ──────
// Place at app root for user-triggered bug reports
<ScreenRecorder
  onScreenshot={(img) => upload(img)}   // screenshot callback
  onRecording={(blob, url) => upload(blob)} // recording callback
  uploadEndpoint="/api/feedback/media"  // auto-upload endpoint (optional)
  webcamOverlay                         // enable webcam overlay (default: true)
  position="bottom-right"               // FAB position
  maxDuration={300}                     // max recording seconds (default: 300)
/>`}
      apiRows={[
        ['ImageCapture', 'Props: photo, onCapture, onClear, allowUpload, maxWidth, maxHeight, quality, onError'],
        ['VideoCapture', 'Props: onCapture(blob, url), maxDuration, startLabel, stopLabel, onError'],
        ['ImageEditor', 'Props: src, onSave, onCancel, tools[], format, quality'],
        ['MediaGallery', 'Props: items[], columns, deletable, onSelect, onDelete'],
        ['ScreenRecorder', 'Props: onScreenshot, onRecording, uploadEndpoint, webcamOverlay, position, maxDuration'],
        ['useCamera()', 'Returns: { videoRef, active, start, stop, capture, switchCamera, facingMode, error }'],
        ['useVideoRecorder()', 'Returns: { videoRef, cameraActive, recording, duration, startCamera, startRecording, stopRecording, error }'],
        ['useScreenCapture()', 'Returns: { videoRef, webcamRef, active, webcamActive, recording, duration, startScreenShare, stopScreenShare, captureFrame, startRecording, stopRecording, error }'],
        ['resizeImage(dataUrl, maxW, maxH, quality, format)', 'Resize image to fit max dimensions'],
        ['rotateImage(dataUrl, degrees)', 'Rotate image by degrees (90 increments)'],
        ['flipImage(dataUrl, direction)', 'Flip horizontal or vertical'],
        ['cropImage(dataUrl, x, y, w, h)', 'Crop image region'],
        ['adjustBrightness(dataUrl, value)', 'Adjust brightness (-100 to 100)'],
        ['adjustContrast(dataUrl, value)', 'Adjust contrast (-100 to 100)'],
        ['dataUrlToBlob(dataUrl)', 'Convert data URL string to Blob'],
        ['fileToDataUrl(file)', 'Convert File to data URL string'],
      ]}
    />
  )
}
