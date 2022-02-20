/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'
import {
    UseFormRegister,
    UseFormHandleSubmit,
    SubmitHandler,
    FieldErrors,
} from 'react-hook-form'

type TFormValues = { username: string; password: string }

interface Props {
    message: string | null
    isLoading: boolean
    onSubmit: SubmitHandler<TFormValues>
    errors: FieldErrors<TFormValues>
    register: UseFormRegister<TFormValues>
    handleSubmit: UseFormHandleSubmit<TFormValues>
}
const LoginForm: FC<Props> = ({
    message,
    isLoading,
    onSubmit,
    errors,
    register,
    handleSubmit,
}) => (
    <div className="form">
        <span>
            <h4>Log in</h4>
        </span>
        <div id="login" className="register-form">
            <form id="login" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="username">
                        Username
                        <input
                            defaultValue=""
                            type="text"
                            {...register('username')}
                            className={`form-control ${
                                errors.username ? 'is-invalid' : ''
                            }`}
                        />
                    </label>
                    <div className="invalid-feedback">
                        {errors.username?.message}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="password">
                        Password
                        <input
                            defaultValue=""
                            type="password"
                            {...register('password')}
                            className={`form-control ${
                                errors.password ? 'is-invalid' : ''
                            }`}
                        />
                    </label>
                    <div className="invalid-feedback">
                        {errors.password?.message}
                    </div>
                </div>

                <div className="form-group">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <span className="spinner-border spinner-border-sm" />
                        )}
                        <span>Login</span>
                    </button>
                </div>
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
            </form>
        </div>
    </div>
)

export default LoginForm
