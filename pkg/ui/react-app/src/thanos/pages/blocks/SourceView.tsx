import React, { FC } from 'react';
import { Block, BlocksPool } from './block';
import { BlockSpan } from './BlockSpan';
import styles from './blocks.module.css';

export const BlocksRow: FC<{
  blocks: Block[];
  gridMinTime: number;
  gridMaxTime: number;
  selectBlock: React.Dispatch<React.SetStateAction<Block | undefined>>;
}> = ({ blocks, gridMinTime, gridMaxTime, selectBlock }) => {
  return (
    <div className={styles.row}>
      {blocks.map<JSX.Element>(b => (
        <BlockSpan selectBlock={selectBlock} block={b} gridMaxTime={gridMaxTime} gridMinTime={gridMinTime} key={b.ulid} />
      ))}
    </div>
  );
};

export interface SourceViewProps {
  data: BlocksPool;
  title: string;
  gridMinTime: number;
  gridMaxTime: number;
  selectBlock: React.Dispatch<React.SetStateAction<Block | undefined>>;
}

export const SourceView: FC<SourceViewProps> = ({ data, title, gridMaxTime, gridMinTime, selectBlock }) => {
  return (
    <>
      <div className={styles.source}>
        <div className={styles.title} title={title}>
          <span>{title}</span>
        </div>
        <div className={styles.rowsContainer}>
          {Object.keys(data).map(k => (
            <BlocksRow
              selectBlock={selectBlock}
              blocks={data[k]}
              key={k}
              gridMaxTime={gridMaxTime}
              gridMinTime={gridMinTime}
            />
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};
