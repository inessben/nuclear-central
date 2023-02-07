import * as THREE from 'three'
import './style.css'
import { OrbitControls } from 'three/addons/controls/OrbitControls'
import { FontLoader } from './modules/FontLoader.js'
import { TextGeometry } from './modules/TextGeometry.js'
import { GLTFLoader } from'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

//
// Loaders
// draco
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco')
// gltf
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)


// MODELS
let smokeStacks
gltfLoader.load
(
    'sources/glb/smokestacks.glb',
    (gltf) => 
    {
        smokeStacks = gltf.scene

        smokeStacks.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        smokeStacks.scale.set(13, 13, 13)
        smokeStacks.position.x = 2
        smokeStacks.position.y= 8
        smokeStacks.position.z= -3
        scene.add(smokeStacks)
    }
)

let car
gltfLoader.load
(
    'sources/glb/car.glb',
    (gltf) => 
    {
        car = gltf.scene

        car.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        car.scale.set(0.6, 0.6, 0.6)
        car.position.x = -3.3
        car.position.y= -0.1
        car.position.z= 1
        scene.add(car)
    }
)

let radioTower
gltfLoader.load
(
    'sources/glb/radio-tower.glb',
    (gltf) => 
    {
        radioTower = gltf.scene

        radioTower.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        radioTower.scale.set(0.2, 0.2, 0.2)
        radioTower.position.x = -6
        radioTower.position.y= -1
        radioTower.position.z= -4
        scene.add(radioTower)
    }
)

let radioTowerTwo
gltfLoader.load
(
    'sources/glb/radio-tower.glb',
    (gltf) => 
    {
        radioTowerTwo = gltf.scene

        radioTowerTwo.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        radioTowerTwo.scale.set(0.2, 0.2, 0.2)
        radioTowerTwo.position.x = -3
        radioTowerTwo.position.y= -1
        radioTowerTwo.position.z= -4
        scene.add(radioTowerTwo)
    }
)

let fence
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fence = gltf.scene

        fence.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fence.scale.set(0.25, 0.25, 0.25)
        fence.position.x = -7.5
        fence.rotation.y = Math.PI * 0.5
        fence.position.y= -1
        fence.position.z= -5
        scene.add(fence)
    }
)

let fenceTwo
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceTwo = gltf.scene

        fenceTwo.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceTwo.scale.set(0.25, 0.25, 0.25)
        fenceTwo.position.x = -7.5
        fenceTwo.rotation.y = Math.PI * 0.5
        fenceTwo.position.y= -1
        fenceTwo.position.z= -3.5
        scene.add(fenceTwo)
    }
)

let fenceThree
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceThree = gltf.scene

        fenceThree.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceThree.scale.set(0.25, 0.25, 0.25)
        fenceThree.position.x = -7.5
        fenceThree.rotation.y = Math.PI * 0.5
        fenceThree.position.y= -1
        fenceThree.position.z= -2
        scene.add(fenceThree)
    }
)

let fenceFour
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceFour = gltf.scene

        fenceFour.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceFour.scale.set(0.25, 0.25, 0.25)
        fenceFour.position.x = -7.5
        fenceFour.rotation.y = Math.PI * 0.5
        fenceFour.position.y= -1
        fenceFour.position.z= -0.5
        scene.add(fenceFour)
    }
)

let fenceFive
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceFive = gltf.scene

        fenceFive.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceFive.scale.set(0.25, 0.25, 0.25)
        fenceFive.position.x = -7.5
        fenceFive.rotation.y = Math.PI * 0.5
        fenceFive.position.y= -1
        fenceFive.position.z= 1
        scene.add(fenceFive)
    }
)

let fenceSix
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceSix = gltf.scene

        fenceSix.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceSix.scale.set(0.25, 0.25, 0.25)
        fenceSix.position.x = -7.5
        fenceSix.rotation.y = Math.PI * 0.5
        fenceSix.position.y= -1
        fenceSix.position.z= 2.5
        scene.add(fenceSix)
    }
)

let fenceSeven
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceSeven = gltf.scene

        fenceSeven.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceSeven.scale.set(0.25, 0.25, 0.25)
        fenceSeven.position.x = -7.5
        fenceSeven.rotation.y = Math.PI * 0.5
        fenceSeven.position.y= -1
        fenceSeven.position.z= 4
        scene.add(fenceSeven)
    }
)

let fenceEight
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceEight = gltf.scene

        fenceEight.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceEight.scale.set(0.25, 0.25, 0.25)
        fenceEight.position.x = 8.5
        fenceEight.rotation.y = Math.PI * 0.5
        fenceEight.position.y= -1
        fenceEight.position.z= 4
        scene.add(fenceEight)
    }
)

let fenceNine
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceNine = gltf.scene

        fenceNine.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceNine.scale.set(0.25, 0.25, 0.25)
        fenceNine.position.x = 8.5
        fenceNine.rotation.y = Math.PI * 0.5
        fenceNine.position.y= -1
        fenceNine.position.z= 2.5
        scene.add(fenceNine)
    }
)

let fenceTen
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceTen = gltf.scene

        fenceTen.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceTen.scale.set(0.25, 0.25, 0.25)
        fenceTen.position.x = 8.5
        fenceTen.rotation.y = Math.PI * 0.5
        fenceTen.position.y= -1
        fenceTen.position.z= 1
        scene.add(fenceTen)
    }
)

let fenceEleven
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceEleven = gltf.scene

        fenceEleven.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceEleven.scale.set(0.25, 0.25, 0.25)
        fenceEleven.position.x = 8.5
        fenceEleven.rotation.y = Math.PI * 0.5
        fenceEleven.position.y= -1
        fenceEleven.position.z= -0.5
        scene.add(fenceEleven)
    }
)

let fenceTwelve
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceTwelve = gltf.scene

        fenceTwelve.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceTwelve.scale.set(0.25, 0.25, 0.25)
        fenceTwelve.position.x = 8.5
        fenceTwelve.rotation.y = Math.PI * 0.5
        fenceTwelve.position.y= -1
        fenceTwelve.position.z= -2
        scene.add(fenceTwelve)
    }
)

let fenceThirteen
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceThirteen = gltf.scene

        fenceThirteen.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceThirteen.scale.set(0.25, 0.25, 0.25)
        fenceThirteen.position.x = 8.5
        fenceThirteen.rotation.y = Math.PI * 0.5
        fenceThirteen.position.y= -1
        fenceThirteen.position.z= -3.5
        scene.add(fenceThirteen)
    }
)

let fenceFourteen
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceFourteen = gltf.scene

        fenceFourteen.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceFourteen.scale.set(0.25, 0.25, 0.25)
        fenceFourteen.position.x = 8.5
        fenceFourteen.rotation.y = Math.PI * 0.5
        fenceFourteen.position.y= -1
        fenceFourteen.position.z= -5
        scene.add(fenceFourteen)
    }
)

let fenceFiveteen
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceFiveteen = gltf.scene

        fenceFiveteen.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceFiveteen.scale.set(0.25, 0.25, 0.25)
        fenceFiveteen.position.x = 7.7
        fenceFiveteen.position.y= -1
        fenceFiveteen.position.z= 5
        scene.add(fenceFiveteen)
    }
)

let fenceSixteen
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceSixteen = gltf.scene

        fenceSixteen.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceSixteen.scale.set(0.25, 0.25, 0.25)
        fenceSixteen.position.x = 6.2
        fenceSixteen.position.y= -1
        fenceSixteen.position.z= 5
        scene.add(fenceSixteen)
    }
)

let fenceSeventeen
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceSeventeen = gltf.scene

        fenceSeventeen.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceSeventeen.scale.set(0.25, 0.25, 0.25)
        fenceSeventeen.position.x = 4.7
        fenceSeventeen.position.y= -1
        fenceSeventeen.position.z= 5
        scene.add(fenceSeventeen)
    }
)

let fenceEighteen
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceEighteen = gltf.scene

        fenceEighteen.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceEighteen.scale.set(0.25, 0.25, 0.25)
        fenceEighteen.position.x = -6.7
        fenceEighteen.position.y= -1
        fenceEighteen.position.z= 4.9
        scene.add(fenceEighteen)
    }
)

let fenceNineteen
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceNineteen = gltf.scene

        fenceNineteen.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceNineteen.scale.set(0.25, 0.25, 0.25)
        fenceNineteen.position.x = -5.2
        fenceNineteen.position.y= -1
        fenceNineteen.position.z= 4.9
        scene.add(fenceNineteen)
    }
)

let fenceTwenty
gltfLoader.load
(
    'sources/glb/fence.glb',
    (gltf) => 
    {
        fenceTwenty = gltf.scene

        fenceTwenty.traverse((child) => 
        {
            if(child.isMesh)
                child.castShadow = true
                child.receiveShadow = true
        })

        fenceTwenty.scale.set(0.25, 0.25, 0.25)
        fenceTwenty.position.x = -3.85
        fenceTwenty.position.y= -1
        fenceTwenty.position.z= 4.9
        scene.add(fenceTwenty)
    }
)
// SCENE //
const scene = new THREE.Scene()

// SIZES //
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

// resize //
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
})

// CAMERA //
const camera = new THREE.PerspectiveCamera(38, 
    sizes.width / sizes.height, 0.1, 100)
// camera position //
camera.position.x = -3
camera.position.y = 6
camera.position.z = 24
scene.add(camera)

// Lights
// ambientLight
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambientLight)
// pointLight
const pointLight = new THREE.PointLight(0xffffff, 1, 10)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)
// directionalLight
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.3)
directionalLight.position.x = - 2
directionalLight.position.y = 3
directionalLight.position.z = 4
scene.add(directionalLight)

// RENDERER //
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.outputEncoding = THREE.sRGBEncoding
renderer.physicallyCorrectLights = true
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)


//Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

// CAMERA CONTROLS //
const cameraControls = new OrbitControls(camera, renderer.domElement)
cameraControls.zoomSpeed = 0.3
cameraControls.enableDamping = true
cameraControls.update()
renderer.render(scene, camera)

// //
// the scene NUCLEAR CENTRAL //
const nuclearCentral = new THREE.Group()
scene.add(nuclearCentral)

// textures//
const textureLoader = new THREE.TextureLoader()
// 
// // sidewalk's texture
const granularTexture = textureLoader.load('./sources/ressources/floor.jpg')
// // box's texture
const metalTexture = textureLoader.load('./sources/ressources/metal.jpg')
// // smoke's texture
const smokedTexture = textureLoader.load('./sources/ressources/smoke.jpg')
//
// base //
const base = new THREE.Mesh
(
    new THREE.BoxGeometry(18, 0.6, 12),
    new THREE.MeshStandardMaterial({ color: 0x939393 })
)
base.position.x = 0.5
base.position.y = -1.2
nuclearCentral.add(base)

//
// SIDEWALKS //
//// first sidewalk ////
const firstSidewalk = new THREE.Mesh
(
    new THREE.BoxGeometry(11, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x818589, map: granularTexture })
)
firstSidewalk.position.x = -8
firstSidewalk.position.y = -0.85
firstSidewalk.position.z = -0.5
firstSidewalk.rotation.y = 11

firstSidewalk.castShadow = true
firstSidewalk.receiveShadow = false
nuclearCentral.add(firstSidewalk)

//// second sidewalk //
const secondSidewalk = new THREE.Mesh
(
    new THREE.BoxGeometry(5.5, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x818589,  map: granularTexture })
)
secondSidewalk.position.x = -5.73
secondSidewalk.position.y = -0.85
secondSidewalk.position.z = 5.5
secondSidewalk.castShadow = true
secondSidewalk.receiveShadow = false
nuclearCentral.add(secondSidewalk)

//// third sidewalk //
const thirthSidewalk = new THREE.Mesh
(
    new THREE.BoxGeometry(4, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x818589,  map: granularTexture })
)
thirthSidewalk.position.x = -0.1
thirthSidewalk.position.y = -0.85
thirthSidewalk.position.z = 4
thirthSidewalk.rotation.y = 11

thirthSidewalk.castShadow = true
thirthSidewalk.receiveShadow = false
nuclearCentral.add(thirthSidewalk)

//// fourth sidewalk //
const fourthSidewalk = new THREE.Mesh
(
    new THREE.BoxGeometry(5.9, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x818589,  map: granularTexture })
)
fourthSidewalk.position.x = 6.5
fourthSidewalk.position.y = -0.85
fourthSidewalk.position.z = 5.5

fourthSidewalk.castShadow = true
fourthSidewalk.receiveShadow = false
nuclearCentral.add(fourthSidewalk)

//// fifth sidewalk //
const fifthSidewalk = new THREE.Mesh
(
    new THREE.BoxGeometry(11, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x818589,  map: granularTexture })
)
fifthSidewalk.position.x = 8.93
fifthSidewalk.position.y = -0.85
fifthSidewalk.position.z = -0.5
fifthSidewalk.rotation.y = 11

fifthSidewalk.castShadow = true
fifthSidewalk.receiveShadow = false
nuclearCentral.add(fifthSidewalk)

//
// sign //
const sign = new THREE.Mesh
(
    new THREE.PlaneGeometry(4, 3),
    new THREE.MeshStandardMaterial({ color: 0xD4C520 })
)
sign.position.x = -5.2
sign.position.y = -0.001
sign.position.z = 5
nuclearCentral.add(sign)

// 
// TEXT //
//// Springfield Nuclear Power plant //
let sText = 'SPRINGFIELD'
let nText = 'NUCLEAR'
let pText = 'POWER PLANT'
// text on sign //
const fontLoader = new FontLoader()
fontLoader.load('./sources/ressources/oswald.json', ( oswald ) => {
        const sGeometry = new TextGeometry (sText, {
            font: oswald,
            height: 0.15,
            size: 0.55,
            curveSegments: 16,
            bevelThickness: 9,
        })
// spriengfield //
        const sMesh = new THREE.Mesh(sGeometry, [
            new THREE.MeshStandardMaterial({ emissive: 0x00000}),
            new THREE.MeshStandardMaterial({ color: 0x00000 })
        ])
        sMesh.position.x = -7
        sMesh.position.y = 0.8
        sMesh.position.z = 5
        nuclearCentral.add(sMesh)
// nuclear//
        const nGeometry = new TextGeometry (nText, {
            font: oswald,
            height: 0.15,
            size: 0.55,
            curveSegments: 16,
            bevelThickness: 9,
        })
        const nMesh = new THREE.Mesh(nGeometry, [
            new THREE.MeshStandardMaterial({ emissive: 0x00000 }),
            new THREE.MeshStandardMaterial({ color: 0x111111 })
        ])
        nMesh.position.x = -6.45
        nMesh.position.y = 0.05
        nMesh.position.z = 5
        nuclearCentral.add(nMesh)
// power plant //
        const pGeometry = new TextGeometry (pText, {
            font: oswald,
            height: 0.15,
            size: 0.55,
            curveSegments: 16,
            bevelThickness: 9,
        })
        const pMesh = new THREE.Mesh(pGeometry, [
            new THREE.MeshStandardMaterial({ emissive: 0x00000 }),
            new THREE.MeshStandardMaterial({ color: 0x111111 })
        ])
        pMesh.position.x = -7.17
        pMesh.position.y = -0.69
        pMesh.position.z = 5
        nuclearCentral.add(pMesh)
})

//
// little house //
// walls //
const walls = new THREE.Mesh
(
    new THREE.BoxGeometry(1.1, 1.5, 1.1),
    new THREE.MeshStandardMaterial({ color: 0x72A1A1 })
)
walls.position.x = -0.1
walls.position.y = -0.3
walls.position.z = 2.4
walls.position.z = 2.4


nuclearCentral.add(walls)

//
// roof //
const roof = new THREE.Mesh
(
    new THREE.ConeGeometry(0.9, 0.5, 5),
    new THREE.MeshStandardMaterial({ color: 0x003823 })
)
roof.position.x = -0.1
roof.position.y = 0.7
roof.position.z = 2.4
nuclearCentral.add(roof)

//
// porthole //
const porthole = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.8, 0.4),
    new THREE.MeshStandardMaterial({ color: 0x93C9C4})
)
porthole.position.x = -0.1
porthole.position.y = 0.01
porthole.position.z = 2.96
nuclearCentral.add(porthole)

// 
// CAR FLOW //
// // left car hump //
const leftHump = new THREE.Mesh
(
    new THREE.BoxGeometry(1.7, 0.1, 0.25),
    new THREE.MeshStandardMaterial({ color: 0x4E0806, map: granularTexture })
)
leftHump.position.x = -1.65
leftHump.position.y = -0.9
leftHump.position.z = 5.5
nuclearCentral.add(leftHump)

// // right car hump //
const rightHump = new THREE.Mesh
(
    new THREE.BoxGeometry(2.5, 0.1, 0.25),
    new THREE.MeshStandardMaterial({ color: 0x4E0806, map: granularTexture })
)
rightHump.position.x = 1.85
rightHump.position.y = -0.9
rightHump.position.z = 5.5
nuclearCentral.add(rightHump)

//// left bar //
const leftBar = new THREE.Mesh
(
    new THREE.BoxGeometry(0.2, 1, 0.1),
    new THREE.MeshStandardMaterial({ color: 0xAA8D29 })
)
leftBar.position.x = -0.47
leftBar.position.y = -0.35
leftBar.position.z = 4
nuclearCentral.add(leftBar)

//// right bar //
const rightBar = new THREE.Mesh
(
    new THREE.BoxGeometry(0.2, 1, 0.1),
    new THREE.MeshStandardMaterial({ color: 0xAA8D29 })
)
rightBar.position.x = 0.25
rightBar.position.y = -0.35
rightBar.position.z = 4
nuclearCentral.add(rightBar)

//// long left bar for cars//
const firstLeftBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
)
firstLeftBar.position.x = -0.7
firstLeftBar.position.y = -0.1
firstLeftBar.position.z = 4
nuclearCentral.add(firstLeftBar)

const secondLeftBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0xAA8D29 })
)
secondLeftBar.position.x = -1
secondLeftBar.position.y = -0.1
secondLeftBar.position.z = 4
nuclearCentral.add(secondLeftBar)

const thirthLeftBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
)
thirthLeftBar.position.x = -1.3
thirthLeftBar.position.y = -0.1
thirthLeftBar.position.z = 4
nuclearCentral.add(thirthLeftBar)

const fourthLeftBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0xAA8D29 })
)
fourthLeftBar.position.x = -1.6
fourthLeftBar.position.y = -0.1
fourthLeftBar.position.z = 4
nuclearCentral.add(fourthLeftBar)

const fifthLeftBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
)
fifthLeftBar.position.x = -1.9
fifthLeftBar.position.y = -0.1
fifthLeftBar.position.z = 4
nuclearCentral.add(fifthLeftBar)

const sixthLeftBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0xAA8D29 })
)
sixthLeftBar.position.x = -2.2
sixthLeftBar.position.y = -0.1
sixthLeftBar.position.z = 4
nuclearCentral.add(sixthLeftBar)

const seventhLeftBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
)
seventhLeftBar.position.x = -2.5
seventhLeftBar.position.y = -0.1
seventhLeftBar.position.z = 4
nuclearCentral.add(seventhLeftBar)

//// long right bar for cars//
const firstRightBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
)
firstRightBar.position.x = 0.5
firstRightBar.position.y = -0.1
firstRightBar.position.z = 4
nuclearCentral.add(firstRightBar)

const secondRightBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0xAA8D29 })
)
secondRightBar.position.x = 0.8
secondRightBar.position.y = -0.1
secondRightBar.position.z = 4
nuclearCentral.add(secondRightBar)

const thirthRightBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
)
thirthRightBar.position.x = 1.1
thirthRightBar.position.y = -0.1
thirthRightBar.position.z = 4
nuclearCentral.add(thirthRightBar)

const fourthRightBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0xAA8D29 })
)
fourthRightBar.position.x = 1.4
fourthRightBar.position.y = -0.1
fourthRightBar.position.z = 4
nuclearCentral.add(fourthRightBar)

const fifthRightBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
)
fifthRightBar.position.x = 1.7
fifthRightBar.position.y = -0.1
fifthRightBar.position.z = 4
nuclearCentral.add(fifthRightBar)

const sixthRightBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0xAA8D29 })
)
sixthRightBar.position.x = 2
sixthRightBar.position.y = -0.1
sixthRightBar.position.z = 4
nuclearCentral.add(sixthRightBar)

const seventhRightBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
)
seventhRightBar.position.x = 2.3
seventhRightBar.position.y = -0.1
seventhRightBar.position.z = 4
nuclearCentral.add(seventhRightBar)

const eighthRightBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0xAA8D29 })
)
eighthRightBar.position.x = 2.6
eighthRightBar.position.y = -0.1
eighthRightBar.position.z = 4
nuclearCentral.add(eighthRightBar)

const ninthRightBar = new THREE.Mesh
(
    new THREE.PlaneGeometry(0.3, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
)
ninthRightBar.position.x = 2.9
ninthRightBar.position.y = -0.1
ninthRightBar.position.z = 4
nuclearCentral.add(ninthRightBar)

// 
// boxs //
    //// first box //
// const firstBox = new THREE.Mesh
// (
//     new THREE.BoxGeometry(1.3, 1.3, 2.1),
//     new THREE.MeshStandardMaterial({ color: 0x8D6D9E , map: metalTexture})
// )
// firstBox.position.x = -6
// firstBox.position.y = -0.4
// firstBox.position.z = -3
// nuclearCentral.add(firstBox)

    //// second box //
const secondBox = new THREE.Mesh
(
    new THREE.BoxGeometry(1.3, 1.3, 2.1),
    new THREE.MeshStandardMaterial({ color: 0x8D6D9E , map: metalTexture})
)
secondBox.position.x = -6
secondBox.position.y = -0.4
secondBox.position.z = -0.2
nuclearCentral.add(secondBox)

//
// structure //
const structure = new THREE.Mesh
(
    new THREE.BoxGeometry(3, 4, 3),
    new THREE.MeshStandardMaterial({ color: 0x889FC1 })
)
structure.position.x = 6
structure.position.y = 1.2
structure.position.z = 2.7
nuclearCentral.add(structure)

// structure's windows //
const firstWindow = new THREE.Mesh
(
    new THREE.PlaneGeometry(2.5, 1),
    new THREE.MeshStandardMaterial({ color: 0xA6BDE9 })
)
firstWindow.position.x = 6
firstWindow.position.y = 2.5
firstWindow.position.z = 4.27
nuclearCentral.add(firstWindow)

const secondWindow = new THREE.Mesh
(
    new THREE.PlaneGeometry(2.5, 1),
    new THREE.MeshStandardMaterial({ color: 0xA6BDE9 })
)
secondWindow.position.x = 6
secondWindow.position.y = 1.3
secondWindow.position.z = 4.27
nuclearCentral.add(secondWindow)

const thirthWindow = new THREE.Mesh
(
    new THREE.PlaneGeometry(2.5, 1),
    new THREE.MeshStandardMaterial({ color: 0xA6BDE9 })
)
thirthWindow.position.x = 6
thirthWindow.position.y = 0.1
thirthWindow.position.z = 4.27
nuclearCentral.add(thirthWindow)

// ANIMATION FRAME //
const loop = () =>
{
    window.requestAnimationFrame(loop)

    cameraControls.update()
    renderer.render(scene, camera)
}
loop()