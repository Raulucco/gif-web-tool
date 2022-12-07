import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { AnimationProps } from './Animation';
import { manifest, MaifestType } from './layers-manifest'

export interface LoaderProps {
    id?: number;
    render: (props: AnimationProps) => React.ReactNode;
}

export interface ImageMeta {
    background: string;
    foreground: string;
    logo: string;
}

export function Loader({ render }: LoaderProps) {
    const { id } = useParams();
    const { background, foreground, logo } = useMemo<ImageMeta>(() => {
        const manifestId = Number(id);
        if (manifest.hasOwnProperty(manifestId)) {
            return manifest[manifestId as keyof  MaifestType];
        }
        return {
            background: '',
            foreground: '',
            logo: '',
        };
    },[id]);

    return (
        <>
        {render({ foreground, background, logo })}
        </>
    );
}