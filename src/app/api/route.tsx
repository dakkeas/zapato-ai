import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

import requests
url = 'https://gltfapi.co/v1/models'
file = open('test.fbx', 'rb')
requests.post(url=url, files={'file': file})
