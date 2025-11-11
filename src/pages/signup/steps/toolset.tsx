import { SignupLayout } from '../../../components/layout/signupLayout/signupLayout';
import { useSignupStore } from '../../../store/signupStore';
import { SIGNUP, TOOLSET_OPTIONS, TOOLSET_OPTION_CATEGORY } from '../../../constants/signup';
import MultiSelectTags from '../../../components/common/multiSelectTags/multiSelectTags';
import { useState } from 'react';
import { colors } from '../../../style/colors';

interface ToolsetProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const Toolset = ({ onNext, currentStep }: ToolsetProps) => {
  const { toolset, setToolset } = useSignupStore();
  const [selectedTools, setSelectedTools] = useState<string[]>(toolset ? toolset.split(',') : []);

  const handleSelectionChange = (selectedValues: string[]) => {
    setSelectedTools(selectedValues);
    setToolset(selectedValues.join(','));
  };

  const getOptionsByCategory = (category: string) => {
    return TOOLSET_OPTIONS.filter(
      (option) => option.category === category && option.value && option.label,
    ).map((option) => ({
      value: option.value!,
      label: option.label!,
    }));
  };

  const getDesignGroups = () => {
    const designCategory = TOOLSET_OPTIONS.find((option) => option.category === '디자인/편집/3D');
    if (designCategory && designCategory.toolsGroup1) {
      return [
        designCategory.toolsGroup1,
        designCategory.toolsGroup2,
        designCategory.toolsGroup3,
      ].filter(Boolean);
    }
    return [];
  };

  const isFormValid = selectedTools.length > 0;

  return (
    <SignupLayout
      title={SIGNUP.REQUIRED_TOOLSET}
      currentStep={3}
      totalSteps={5}
      onNext={onNext}
      buttonVariant="signup"
      isFormValid={isFormValid}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 500, color: colors.gray[500] }}>
            디자인/편집/3D
          </div>
          {getDesignGroups().map((group, index) => (
            <div
              key={index}
              style={{ marginBottom: index < getDesignGroups().length - 1 ? '1.5rem' : '0' }}
            >
              <MultiSelectTags
                label=""
                options={group.map((tool) => ({
                  value: tool.value,
                  label: tool.label,
                }))}
                selectedValues={selectedTools}
                onSelectionChange={handleSelectionChange}
                maxSelections={10}
                isDesignSection={true}
              />
            </div>
          ))}
        </div>

        {/* 개발 카테고리 */}
        <MultiSelectTags
          label="개발"
          options={getOptionsByCategory('개발')}
          selectedValues={selectedTools}
          onSelectionChange={handleSelectionChange}
          maxSelections={10}
        />

        {/* 기타 카테고리 */}
        <MultiSelectTags
          label="기타"
          options={getOptionsByCategory('기타')}
          selectedValues={selectedTools}
          onSelectionChange={handleSelectionChange}
          maxSelections={10}
        />
      </div>
    </SignupLayout>
  );
};
