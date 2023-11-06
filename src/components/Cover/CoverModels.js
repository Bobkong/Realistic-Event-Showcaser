import { makeStyles, useMediaQuery } from "@material-ui/core";
import CoverBase from "./CoverBase";
import { Canvas, useThree } from '@react-three/fiber';
import { AmbientLight } from 'three';
import { Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Football } from "../Cover3D/Football.tsx";
import { Tennis } from "../Cover3D/Tennis.tsx";
import { Cycling } from "../Cover3D/Cycling.tsx";
import { Skateboarding } from "../Cover3D/Skateboarding.tsx";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
    },

}));

const CoverModels = () => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const classes = useStyles();
    return (
        <Canvas className={classes.root}>
            <ambientLight />
            <pointLight position={[-5, 5, 5]} intensity={180} />
            <pointLight position={[3, -3, 2]} intensity={20}/>
            <pointLight position={[3, 3, 2]} intensity={20}/>
            <OrbitControls enableZoom={false} />
            <Float speed={1} rotationIntensity={1}>
                <Football position={[2, -2.5, -1]} />
                <Tennis position={[-2, 1.2, -1]} />
                <Cycling position={[1.5, 0, 1.5]} />
                <Skateboarding position={[-1, -2.2, 1]} />
            </Float>
        </Canvas>
    )
}

export default CoverModels