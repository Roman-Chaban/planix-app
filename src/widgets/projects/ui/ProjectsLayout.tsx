'use client';

import { useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { filterProjects } from '@/widgets/projects/lib/filter-projects/filter-projects';
import { headerItems } from '@/widgets/projects/lib/header-items/header-items';
import type { TabId } from '@/widgets/projects/model/types';
import styles from '@/widgets/projects/styles/projects.module.scss';
import { ProjectsHeader } from '@/widgets/projects/ui/ProjectsHeader/ui/ProjectsHeader';
import { ProjectToolbar } from '@/widgets/projects/ui/ProjectsToolbar/ui/ProjectsToolbar';
import { useAllProjects } from '@/features/projects/hooks/useAllProjects';
import { useProjectsFilters } from '@/features/projects/hooks/useProjectsFilters';
import { toProjectTableItem } from '@/features/projects/model/adapters';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/constants/buttons';
import { Box, Button, Header, Modal, NoProjects, PageWrapper } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/icons';
import { ModalHeader, ModalActions } from '@/shared/ui/modal';
import { ProjectsTable } from '@/shared/ui/project/ui/ProjectTable';
import { Textarea } from '@/shared/ui/textarea/ui/Textarea';

const { DEFAULT, OUTLINE } = BUTTON_VARIANTS;
const { BUTTON } = BUTTON_TYPES;
const { LARGE } = BUTTON_SIZES;

export const ProjectsLayout = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<TabId>(headerItems[0].id);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);

  const { control, watch } = useProjectsFilters();
  const { data } = useAllProjects();

  const search = watch('search');

  const projectItems = useMemo(() => {
    return data?.data?.map(toProjectTableItem) ?? [];
  }, [data]);

  const filteredProjects = useMemo(() => {
    return filterProjects(projectItems, activeId, search);
  }, [projectItems, activeId, search]);

  const isEmptyProjects = filteredProjects.length === 0;

  const handleCloseModal = () => {
    return setProjectToDelete(null);
  };

  const handleTrashClick = (id: string) => {
    return setProjectToDelete(id);
  };

  return (
    <PageWrapper header={<Header title={'DashboardHeaders.projects'} />}>
      <Box className={styles.headerToolbar}>
        <ProjectsHeader activeId={activeId} setActiveId={setActiveId} />
        <ProjectToolbar control={control} />
      </Box>

      {isEmptyProjects ? (
        <NoProjects />
      ) : (
        <ProjectsTable onTrashClick={handleTrashClick} projects={filteredProjects} />
      )}

      <Modal isOpen={!!projectToDelete} onClose={handleCloseModal}>
        <ModalHeader
          onClose={handleCloseModal}
          title="ProjectsModal.Header.title"
          icon={<CloseIcon />}
        />

        <Textarea
          placeholder="ProjectsModal.Content.placeholder"
          label="ProjectsModal.Content.label"
          textareaClassName={styles.textarea}
          labelClassName={styles.reasonLabel}
        />

        <ModalActions className={styles.actions}>
          <Button fullWidth type={BUTTON} variant={OUTLINE} size={LARGE} className={styles.cancel}>
            {t('ProjectsModal.Content.cancel')}
          </Button>
          <Button fullWidth type={BUTTON} variant={DEFAULT} size={LARGE} className={styles.save}>
            {t('ProjectsModal.Content.save')}
          </Button>
        </ModalActions>
      </Modal>
    </PageWrapper>
  );
};
