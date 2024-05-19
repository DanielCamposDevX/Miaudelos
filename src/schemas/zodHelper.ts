import { z } from "zod";

export const zodEmail =  z.string({message: "Digite seu email"}).email("Insira um email válido");

export const zodPassword = z.string({message: "Digite sua senha"}).min(6, "A senha deve ter no mínimo 6 caracteres").max(50, "A senha deve ter no máximo 50 caracteres");

export const zodUserName = z.string({message: "Digite seu nome"}).min(3, "O nome deve ter no mínimo 3 caracteres").max(50, "O nome deve ter no máximo 50 caracteres");

export const zodCPF = z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/,{message:"Digite um CPF válido"}).transform(value => value.replace(/\D/g, ''));

export const zodCellPhone = z.string().regex(/\(\d\d\)\s\d\s\d\d\d\d-\d\d\d\d/i,{message:"Digite um telefone válido"}).transform(value => value.replace(/\D/g, ''));