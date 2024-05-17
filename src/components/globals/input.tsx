'use client';
import { InfoOutlined } from '@mui/icons-material';
import {
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { type ReactNode } from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';
import InputMask from 'react-input-mask';

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  error: any;
  mask?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegisterReturn<string>;
  disabled: boolean;
  width?: string;
  onChange?: (e: any) => void;
  multiline?: boolean;
  value?: string;
  tooltip?: string;
  sufix?: string | ReactNode;
}

export default function Input({
  placeholder,
  label,
  error,
  mask,
  type,
  register,
  required,
  disabled,
  width,
  onChange,
  onPaste,
  onBlur,
  multiline,
  value,
  tooltip,
  sufix,
  ...rest
}: props) {
  return (
    <div className={`flex flex-col gap-1 ${width ?? ''} relative py-1`}>
      <label className="text-base font-normal text-[#9E9E9E] text-nowrap">
        {placeholder}
        {tooltip && (
          <Tooltip
            title={tooltip}
            sx={{
              height: '20px',
              width: '20px',
              marginLeft: '5px',
              marginBottom: '5px',
            }}
          >
            <IconButton>
              <InfoOutlined sx={{ height: '20px', color: '#363E7A' }} />
            </IconButton>
          </Tooltip>
        )}
      </label>
      {mask && (
        <InputMask
          mask={mask}
          onChange={onChange}
          onBlur={register?.onBlur}
          value={value}
        >
          {/* @ts-expect-error: This error is expected because of the lib with no type. */}
          {(inputProps: any) => (
            <TextField
              type={type ?? 'text'}
              error={Boolean(error)}
              placeholder={placeholder}
              {...rest}
              InputProps={
                sufix && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography fontSize={16} color={'#212121'}>
                        {sufix}
                      </Typography>
                    </InputAdornment>
                  ),
                }
              }
              {...register}
              label={label}
              required={required}
              disabled={disabled}
              onChange={onChange}
              multiline={multiline}
              rows={multiline ? 4 : 1}
              {...inputProps}
            />
          )}
        </InputMask>
      )}
      {!mask && (
        <TextField
          type={type ?? 'text'}
          error={Boolean(error)}
          value={value}
          placeholder={placeholder}
          variant="outlined"
          InputProps={{
            endAdornment: sufix && (
              <InputAdornment position="end">
                <Typography fontSize={16} color={'#CDCDCD'}>
                  {sufix}
                </Typography>
              </InputAdornment>
            ),
          }}
          label={label}
          multiline={multiline}
          rows={multiline ? 4 : 1}
          {...register}
          required={required}
          disabled={disabled}
          onChange={onChange ?? register?.onChange}
          onPaste={onPaste ?? register?.onBlur}
          onBlur={onBlur ?? register?.onBlur}
        />
      )}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
