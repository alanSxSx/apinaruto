'use client'
import React, { useState, useEffect, useMemo } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import Characters from '../interfaces/Characters';
// import Character from '../interfaces/Characters';
import getCharacters from './getCharacters';
import 'primeflex/primeflex.css';
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';

interface DataCharacterProps {
    characters: Characters[];
}



export default function DataCharacter({ characters }: DataCharacterProps) {

    // const [characters, setCharacters] = useState<Characters[]>([]);
    const [layout, setLayout] = useState<'list' | 'grid'>('grid');
    const [globalFilter, setGlobalFilter] = useState<string>('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const charactersData = await getCharacters();
    //         setCharacters(charactersData);
    //       } catch (error) {
    //         console.error('Erro ao obter personagens:', error);
    //       }
    //     };

    //     fetchData();
    //   }, []);

    const listItem = (characters: Characters) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    {/* Imagem */}
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{characters.name}</div>
                            {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    {/* <span className="font-semibold">{product.category}</span> */}
                                </span>

                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            {/* <span className="text-2xl font-semibold">${product.price}</span> */}

                        </div>
                    </div>
                </div>
            </div>
        );
    };
    

    const gridItem = (characters: Characters) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{characters.id}</span>
                        </div>

                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        {/* Imagem */}
                        {(<Image className="w-9 shadow-2 border-round" src={characters.images[0]} alt={characters.name} width={500} height={500} style={{ width: 'auto', height: 'auto' }} /> ? <Image className="w-9 shadow-2 border-round" src={characters.images[0]} alt={characters.name} width={500} height={500} style={{ width: 'auto', height: 'auto' }} /> : 'TESTANDO' )}
                        {/* <Image className="w-9 shadow-2 border-round" src={characters.images[0]} alt={characters.name} width={500} height={500} style={{ width: 'auto', height: 'auto' }} /> */}
                        <div className="text-2xl font-bold">{characters.name}</div>
                        {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        {/* <span className="text-2xl font-semibold">${product.price}</span> */}

                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (character: Characters, layout: string) => {
        if (!character) {
            return;
        }

        if (layout === 'list') return listItem(character);
        else if (layout === 'grid') return gridItem(character);
    };

    const header = () => {
        return (
            <div className="flex align-items-center justify-content-end h-3rem">
                <InputText
                    placeholder="Buscar..."
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                />
                <DataViewLayoutOptions className='flex' layout={layout} onChange={(e) => setLayout(e.value as 'list' | 'grid')} />
            </div>
        );
    };

    

      const filteredCharacters = useMemo(() => {
        return characters.filter((character) =>
            character.name.toLowerCase().includes(globalFilter.toLowerCase())
        );
    }, [characters, globalFilter]);

    return (
        <div className="card">
            <DataView value={filteredCharacters} itemTemplate={itemTemplate} layout={layout} header={header()} paginator rows={9} />
        </div>
    )
}
