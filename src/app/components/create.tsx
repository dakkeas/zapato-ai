"use client"
import React, { useState } from 'react';
import Options from '../components/options';
import PromptBox from '../components/prompt-box';
import Result from '../components/result'

const Create = () => {


    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5">
                <Options></Options>
                <PromptBox></PromptBox>
            </div>
            <Result></Result>
        </div>

    );
};

export default Create;
