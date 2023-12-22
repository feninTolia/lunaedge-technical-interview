import { FormProvider, useForm } from 'react-hook-form';
import Input from '../shared/ui/Inputs/Input';
import PrimaryButton from '../shared/ui/buttons/PrimaryButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '../shared/schemas/registration.schema';
import { IRegistrationFormProps, IRegistrationInputs } from '../shared/types';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const RegistrationForm = ({ onSuccess }: IRegistrationFormProps) => {
  const methods = useForm<IRegistrationInputs>({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = (data: any) => {
    onSuccess(true);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <Input
          label="First name"
          name="firstName"
          helperText="I am helping"
          InputIcon={<UserCircleIcon />}
        />
        <Input
          label="Last name"
          name="lastName"
          TopRightSlot={<span>Some info</span>}
          InputIcon={<UserCircleIcon />}
        />
        <PrimaryButton type="submit" className=" self-center">
          Next
        </PrimaryButton>
      </form>
    </FormProvider>
  );
};

export default RegistrationForm;
