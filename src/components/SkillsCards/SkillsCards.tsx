import { skills } from 'store/skils';
import { skillDetails } from 'store/skillDetails';
import './SkillsCards.css';
import { ISkills } from 'types/skils-type';
import { ImageDefiner } from 'utils/image-definer';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Иконка крестика
import { useState } from 'react';

const SkillsCards = () => {
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<ISkills | null>(null);

  const handleOpen = (skill: ISkills) => {
    setSelectedSkill(skill);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSkill(null);
  };

  const getDetailedDescription = (id: number) => {
    const detail = skillDetails.find((skill) => skill.id === id);
    return detail ? detail.detailedDescription : 'Описание не найдено.';
  };

  return (
    <div className="skills-container">
      {skills.map((skill: ISkills) => (
        <div key={skill.id} className="skill-card" onClick={() => handleOpen(skill)}>
          <div className="skill-image">
            {ImageDefiner(skill.name)}
          </div>
          <h3 className="skill-name">{skill.name}</h3>
          <p className="skill-description">{skill.description}</p>
          <div className="skill-progress">
            <div
              className="skill-fill"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
          <span className="skill-percentage">{skill.percentage}%</span>
        </div>
      ))}

      {/* Модальное окно */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '85%', sm: '80%', md: '400px' }, // Уменьшили ширину на xs
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '12px', // Закругленные углы
            maxHeight: '90vh', // Ограничение по высоте
            overflowY: 'auto', // Скролл, если контент не помещается
          }}
        >
          {/* Кнопка закрытия */}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedSkill && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {selectedSkill.name}
              </Typography>
              <div className="skill-image">
                {ImageDefiner(selectedSkill.name)}
              </div>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {getDetailedDescription(selectedSkill.id)}
              </Typography>
              <div className="skill-progress-modal">
                <div
                  className="skill-fill-modal"
                  style={{ width: `${selectedSkill.percentage}%` }}
                ></div>
              </div>
              <Typography sx={{ mt: 2 }}>
                Уровень владения: {selectedSkill.percentage}%
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default SkillsCards;