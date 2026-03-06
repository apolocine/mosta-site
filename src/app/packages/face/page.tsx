import { packages } from '@/lib/packages'
import PackagePage from '@/components/PackagePage'

export const metadata = { title: '@mostajs/face — Face Recognition' }

export default function FacePage() {
  return (
    <PackagePage
      pkg={packages[5]}
      quickStart={`import { loadModels, detectFace, extractDescriptor, findMatch } from '@mostajs/face'

// 1. Load face-api.js models
await loadModels('/models')

// 2. Detect face and extract descriptor
const detection = await detectFace(imageElement)
const descriptor = await extractDescriptor(imageElement)

// 3. Match against known faces
const knownFaces = [
  { label: 'Alice', descriptor: aliceDescriptor },
  { label: 'Bob', descriptor: bobDescriptor },
]

const match = findMatch(descriptor, knownFaces, 0.6)
if (match) {
  console.log(\`Matched: \${match.label} (distance: \${match.distance})\`)
}`}
      apiRows={[
        ['loadModels(path?, config?)', 'Load face-api.js models'],
        ['isLoaded()', 'Check if models are loaded'],
        ['detectFace(input)', 'Detect single face with landmarks'],
        ['detectAllFaces(input)', 'Detect all faces with landmarks'],
        ['extractDescriptor(input)', 'Extract 128-dimensional face descriptor'],
        ['compareFaces(d1, d2)', 'Euclidean distance between two descriptors'],
        ['findMatch(desc, known, threshold)', 'Find best match below threshold'],
        ['findAllMatches(desc, known, threshold)', 'Find all matches sorted by distance'],
        ['useCamera(options?)', 'Camera management React hook'],
        ['useFaceDetection(videoRef, options?)', 'Continuous face detection React hook'],
        ['descriptorToArray(descriptor)', 'Convert Float32Array to number[]'],
        ['arrayToDescriptor(array)', 'Convert number[] to Float32Array'],
        ['isValidDescriptor(descriptor)', 'Validate 128-element descriptor'],
        ['drawDetection(canvas, detection)', 'Draw bounding box on canvas'],
      ]}
    />
  )
}
