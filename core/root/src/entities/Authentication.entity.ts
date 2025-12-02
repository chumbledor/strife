import AccountEntity from '@/entities/Account.entity.js';
import BaseEntity from '@/entities/Base.entity.js';
import { BeforeCreate, BeforeUpdate, Entity, OneToOne, Property, type EventArgs } from '@mikro-orm/core';
import { hash, verify } from 'argon2';

@Entity()
export default class AuthenticationEntity extends BaseEntity {

  @OneToOne({ primary: true })
  public account!: AccountEntity;

  @Property({ hidden: true, lazy: true })
  public password!: string;

  @Property({ persist: false })
  public accessToken?: string;

  @Property({ persist: false })
  public refreshToken?: string;

  @BeforeCreate()
  @BeforeUpdate()
  public async hashPassword(args: EventArgs<AuthenticationEntity>): Promise<void> {
    const password = args.changeSet?.payload.password;
    if (!password)
      return;

    this.password = await hash(password);
  }

  public async verifyPassword(password: string): Promise<boolean> {
    return verify(this.password, password);
  }

}