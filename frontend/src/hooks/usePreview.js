import { useState } from 'react';

export function usePreview() {
  const [openPreview, setOpenPreview] = useState(false);
  const [project, setProject] = useState([]);

  const onPreview = (project) => {
    setOpenPreview(true);
    setProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setOpenPreview(false);
    setProject([]);
    document.body.style.overflow = 'auto';
  };

  return { openPreview, project, onPreview, closePreview };
}
