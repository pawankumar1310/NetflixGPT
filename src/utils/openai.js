// import OpenAI from 'openai';
// import { OPENAI_API_KEY } from './constants';

// const client = new OpenAI({
//   apiKey: OPENAI_API_KEY, // This is the default and can be omitted
//   dangerouslyAllowBrowser: true
// });


import { GoogleGenerativeAI } from "@google/generative-ai"; 
import { REACT_APP_GEMINI_API_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(REACT_APP_GEMINI_API_KEY);

export default genAI;